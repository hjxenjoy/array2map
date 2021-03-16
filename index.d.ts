export function array2bool(array: string[]): Record<string, boolean>
export function array2bool(array: number[]): Record<number, boolean>
export function array2bool<T extends { [x: string]: any }>(array: T[], primaryKey: keyof T): Record<string, boolean>
export function array2item<T extends { [x: string]: any }>(array: T[], primaryKey: keyof T): Record<string, T>
export function array2item<T = any, K = string | number, R = any>(array: T[], getKey: (item: T, index: number) => K, getValue: (item: T, index: number) => R): Record<string, R>
export function array2children<T = any, E = any>(array: T[], cb: (item: T, index: number) => E[]): E[]
