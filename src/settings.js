export function registerSettings() {
   game.settings.register("pf2e-aztecs-inline-builder", "autoCopyOnInsert", {
      name: "PF2E-AZTECS.Settings.AutoCopyOnInsert.Name",
      hint: "PF2E-AZTECS.Settings.AutoCopyOnInsert.Hint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
   })

   game.settings.register("pf2e-aztecs-inline-builder", "closeOnInsert", {
      name: "PF2E-AZTECS.Settings.CloseOnInsert.Name",
      hint: "PF2E-AZTECS.Settings.CloseOnInsert.Hint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
   })

   game.settings.register("pf2e-aztecs-inline-builder", "closeOnCopy", {
      name: "PF2E-AZTECS.Settings.CloseOnCopy.Name",
      hint: "PF2E-AZTECS.Settings.CloseOnCopy.Hint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
   })
}
