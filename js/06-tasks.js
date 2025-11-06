/*
 * Напиши скрипт перевірки підписки користувача придоступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 * - Виконала
 */

const sub = "free";
const canAccess = sub === "pro" || sub === "vip";
const message = canAccess ? "Доступ наданий" : "Доступ заборонений";
console.log(message);



/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 * - Виконала
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log(canOpenChat ? "Можна відкрити чат": "Не відкривати чат");
