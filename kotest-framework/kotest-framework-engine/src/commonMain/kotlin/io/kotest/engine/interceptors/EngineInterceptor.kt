package io.kotest.engine.interceptors

import io.kotest.common.ExperimentalKotest
import io.kotest.common.KotestInternal
import io.kotest.core.Tags
import io.kotest.core.config.Configuration
import io.kotest.engine.EngineResult
import io.kotest.engine.TestSuite
import io.kotest.engine.listener.CompositeTestEngineListener
import io.kotest.engine.listener.NoopTestEngineListener
import io.kotest.engine.listener.TestEngineListener

/**
 * Extension that intercepts calls to the engine.
 *
 * This extension can be used to execute code before or after the engine
 * and permits changing the [EngineContext].
 */
@KotestInternal
interface EngineInterceptor {
   suspend fun intercept(context: EngineContext, execute: suspend (EngineContext) -> EngineResult): EngineResult
}

@KotestInternal
data class EngineContext(
   val suite: TestSuite,
   val listener: TestEngineListener,
   val tags: Tags,
   val configuration: Configuration,
) {

   companion object {
      val empty = EngineContext(TestSuite.empty, NoopTestEngineListener, Tags.Empty, Configuration())
   }

   /**
    * Returns this [EngineContext] with the given [listener] added via a [CompositeTestEngineListener].
    */
   fun mergeListener(listener: TestEngineListener): EngineContext {
      return EngineContext(suite, CompositeTestEngineListener(listOf(this.listener, listener)), tags, configuration)
   }

   fun withTestSuite(suite: TestSuite): EngineContext {
      return EngineContext(suite, listener, tags, configuration)
   }

   fun withConfiguration(c: Configuration): EngineContext {
      return EngineContext(suite, listener, tags, c)
   }
}