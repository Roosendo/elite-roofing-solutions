/**
 * Obtener elemento del DOM por cadena de selector
 * @example
 * 	const elementClass = $('.mi-clase')
 * 	const elementId = $('#mi-id')
 * @param selector
 * @param context
 * @returns  HTMLElement
 */
export const $ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelector<T>(selector)

/**
 * Obtener elementos del DOM por cadena de selector
 * @example
 * 	const elements = $$('.mis-clases')
 * @param selector
 * @param context
 * @returns  NodeList
 */
export const $$ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelectorAll<T>(selector)
