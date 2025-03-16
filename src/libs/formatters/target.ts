const targets = {
  'designer': 'デザイナー',
  'enginner': 'エンジニア',
} as const

export const targetFormatter = (target: keyof typeof targets) => targets[target]
