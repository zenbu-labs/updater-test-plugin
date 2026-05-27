import pc from "picocolors"

import { Service } from "@zenbujs/core/runtime"

/**
 * Test plugin for the auto-updater. Each commit on the bumps branch should
 * bump the version string below so we can confirm at runtime which revision
 * is actually loaded after an apply + relaunch.
 */
export const PLUGIN_VERSION = "v3"

export class UpdaterTestService extends Service.create({
  key: "updaterTest",
}) {
  evaluate() {
    // picocolors is a fresh dep added in v2 — if the auto-updater's
    // dependency-install phase worked, this require resolves at boot.
    // eslint-disable-next-line no-console
    console.log(
      pc.green(
        `[updater-test-plugin] running ${PLUGIN_VERSION} (git-only bump, no deps)`,
      ),
    )
  }

  version(): string {
    return PLUGIN_VERSION
  }
}
