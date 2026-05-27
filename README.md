# updater-test-plugin

End-to-end test rig for the zenbu plugin auto-updater. The plugin is
intentionally trivial: a single service that logs a `PLUGIN_VERSION` string on
startup. Each commit on the `bumps` branch bumps that string so we can confirm
at runtime which revision is loaded after a successful update + relaunch.

Worktrees:

- `main` at `~/.zenbu/plugins/updater-test-plugin` — what the host app loads.
- `bumps` at `~/zenbu-worktrees/updater-test-plugin-bumps` — where we push new
  commits to simulate an upstream that the host should pull.
