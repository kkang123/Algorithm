function solution(phone_number) {
    return phone_number.split("").map((num, i) => i < phone_number.length - 4 ? "*" : num).join("")
}
