function solution(my_string) {
    // return my_string.trim().split(/\s+/)
    return my_string.split(" ").filter(str => str !== "")
}
