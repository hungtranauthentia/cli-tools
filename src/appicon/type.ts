export type Options = {
  platform: Array<string>;
  flavor: string;
  iosIconName: string;
  source: string;
  androidSource: string;
  iosSource: string;
  removeAlphaIos: boolean;
};

export type IOSConfigOptions = Omit<Options, "androidSource" | "flavor">;
export type AndroidConfigOptions = Omit<
  Options,
  "iosIconName" | "iosSource" | "removeAlphaIos"
>;
export type AndroidGenIconArg = {
  coverSize: number;
  iconSize: number;
  borderRadius: number;
  sourceIcon: string;
  destIcon: string;
  padding: number;
  resDir: string;
};
