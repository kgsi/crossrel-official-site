const targets = {
  designer: "デザイナー",
  engineer: "エンジニア",
  all: "すべて",
} as const;

export const targetFormatter = (target: keyof typeof targets) =>
  targets[target];
