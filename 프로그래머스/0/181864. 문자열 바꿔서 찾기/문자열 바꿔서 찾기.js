function solution(myString, pat) {
    return myString.replaceAll("A", "#")
    .replaceAll("B", "A")
    .replaceAll("#", "B").includes(pat) ? 1 : 0
}
