const PREFIX = '@';
const DIVIDER = '/';

/** Привязка типов к редюсерам.
 *
 * Возвращает объект где ключ — это элемент массива `actionTypesNames`,
 * а значение — это конкатинированная
 * строка `PREFIX.namespace.DIVIDER.actionTypesNames[i]`
 *
 */
export default function actionTypes(namespace: string, actionTypesNames: string[]) {
  const types: Record<string, string> = {};

  actionTypesNames.forEach((name) => {
    types[name] = PREFIX + namespace + DIVIDER + name;
  });

  return types;
}
