plugins {
   `java-library`
   kotlin("multiplatform")
}

kotlin {
   targets {
      jvm()
   }

   sourceSets {
      val jvmMain by getting {
         dependencies {
            implementation(kotlin("stdlib"))
            compileOnly(libs.kotlin.compiler)
         }
      }
   }
}

apply(from = "../../publish-mpp.gradle.kts")
