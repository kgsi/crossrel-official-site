const targets = {
  'designer': 'デザイナー',
  'engineer': 'エンジニア',
} as const

export const targetFormatter = (target: keyof typeof targets) => targets[target]
