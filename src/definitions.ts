declare module "@capacitor/core" {
  interface PluginRegistry {
    HolaMundo: HolaMundoPlugin;
  }
}

export interface HolaMundoPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
