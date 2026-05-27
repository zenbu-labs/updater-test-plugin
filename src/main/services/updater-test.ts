import { Service } from "@zenbujs/core/runtime"

/**
 * Test plugin for the auto-updater. Each commit on the bumps branch should
 * bump the version string below so we can confirm at runtime which revision
 * is actually loaded after an apply + relaunch.
 */
export const PLUGIN_VERSION = "v0"

export class UpdaterTestService extends Service.create({
  key: "updaterTest",
}) {
  evaluate() {
    // eslint-disable-next-line no-console
    console.log(`[updater-test-plugin] running ${PLUGIN_VERSION}`)
  }

  version(): string {
    return PLUGIN_VERSION
  }
}
