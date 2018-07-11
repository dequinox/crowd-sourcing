export function translate(word) {
    var translated = ""

    switch (word) {
        case "pending":
            translated = "В работе"
            break;
        case "completed":
            translated = "Решено"
            break;
        case "discussed":
            translated = "На обсуждении"
            break;
        case "ignored":
            translated = "Не просмотрено"
            break;
    }

    return translated
}
