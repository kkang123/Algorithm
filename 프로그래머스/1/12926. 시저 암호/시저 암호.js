function solution(s, n) {
    return s.split("").map(char => {
        const code = char.charCodeAt()
        
        if (char === " ") {
            return " ";  // ✅ 공백은 그대로
        }

        
        
        if (code >= 65 && code <= 90) {
            return String.fromCharCode((code - 65 + n) % 26 + 65);
        }

        if (code >= 97 && code <= 122) {
            return String.fromCharCode((code - 97 + n) % 26 + 97);
        }

    }).join('');
}
