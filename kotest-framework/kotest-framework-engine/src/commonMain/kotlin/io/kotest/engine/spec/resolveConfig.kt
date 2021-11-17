package io.kotest.engine.spec

import io.kotest.core.config.Configuration
import io.kotest.engine.tags.tags
import io.kotest.core.spec.Spec
import io.kotest.core.test.Enabled
import io.kotest.core.test.EnabledOrReasonIf
import io.kotest.core.test.TestCase
import io.kotest.core.test.config.ResolvedTestConfig
import io.kotest.core.test.config.UnresolvedTestConfig
import kotlin.time.milliseconds

/**
 * Accepts an [UnresolvedTestConfig] and returns a [ResolvedTestConfig] by completing
 * any nulls in the unresolved config with defaults from the [spec] or [Configuration].
 */
internal fun resolveConfig(
   config: UnresolvedTestConfig?,
   xdisabled: Boolean?,
   parent: TestCase?,
   spec:Spec,
   configuration: Configuration
): ResolvedTestConfig {

   val defaultTestConfig = spec.defaultTestConfig
      ?: spec.defaultTestCaseConfig()
      ?: configuration.defaultTestConfig

   val enabled: EnabledOrReasonIf = { testCase ->
      when {
         // if xdisabled we always override any other enabled/disabled flags
         xdisabled == true -> Enabled.disabled("Disabled by xmethod")
         config?.enabled == false -> Enabled.disabled("Disabled by enabled flag in config")
         config?.enabledIf != null -> if (config.enabledIf!!.invoke(testCase)) Enabled.enabled else Enabled.disabled("Disabled by enabledIf flag in config")
         config?.enabledOrReasonIf != null -> config.enabledOrReasonIf!!.invoke(testCase)
         !defaultTestConfig.enabled -> Enabled.disabled
         !defaultTestConfig.enabledIf.invoke(testCase) -> Enabled.disabled
         else -> defaultTestConfig.enabledOrReasonIf.invoke(testCase)
      }
   }

   val timeout = config?.timeout
      ?: parent?.config?.timeout
      ?: spec.timeout?.milliseconds
      ?: spec.timeout()?.milliseconds
      ?: defaultTestConfig.timeout
      ?: configuration.timeout.milliseconds

   val threads = config?.threads
      ?: spec.threads
      ?: spec.threads()
      ?: defaultTestConfig.threads

   val invocations = config?.invocations
      ?: defaultTestConfig.invocations

   val invocationTimeout = config?.invocationTimeout
      ?: parent?.config?.invocationTimeout
      ?: spec.invocationTimeout?.milliseconds
      ?: spec.invocationTimeout()?.milliseconds
      ?: defaultTestConfig.invocationTimeout
      ?: configuration.invocationTimeout.milliseconds

   val extensions = (config?.listeners ?: emptyList()) +
      (config?.extensions ?: emptyList()) +
      defaultTestConfig.extensions +
      defaultTestConfig.listeners

   return ResolvedTestConfig(
      enabled = enabled,
      threads = threads,
      invocations = invocations,
      timeout = timeout,
      invocationTimeout = invocationTimeout,
      tags = (config?.tags ?: emptySet()) + (defaultTestConfig.tags) + (parent?.config?.tags ?: emptySet()) + spec.tags() + spec.appliedTags() + spec::class.tags(),
      extensions = extensions,
      failfast = config?.failfast ?: parent?.config?.failfast ?: spec.failfast ?: configuration.failfast,
      severity = config?.severity ?: parent?.config?.severity ?: spec.severity ?: configuration.severity,
      assertSoftly = config?.assertSoftly ?: parent?.config?.assertSoftly ?:spec.assertSoftly ?: configuration.globalAssertSoftly,
      assertionMode = config?.assertionMode ?: parent?.config?.assertionMode ?: spec.assertions ?: spec.assertionMode() ?: configuration.assertionMode,
      coroutineDebugProbes = config?.coroutineDebugProbes ?: parent?.config?.coroutineDebugProbes ?:spec.coroutineDebugProbes ?: configuration.coroutineDebugProbes,
      testCoroutineDispatcher = config?.testCoroutineDispatcher ?: parent?.config?.testCoroutineDispatcher ?: spec.testCoroutineDispatcher ?: configuration.testCoroutineDispatcher,
      blockingTest = config?.blockingTest ?: parent?.config?.blockingTest ?: spec.blockingTest ?: configuration.blockingTest,
   )
}