import sys
input = sys.stdin.readline

while True:
    test = input().rstrip()
    if test == '.':
        break
    
    stack = []

    for char in test:
        if char == '(' or char == '[':
            stack.append(char)
        elif char == ')' or char == ']':
            if stack and ((char == ')' and stack[-1] == '(') or (char == ']' and stack[-1] == '[')):
                stack.pop()
            else:
                print('no')
                break
    else:

        if not stack:
            print('yes')
        else:
            print('no')

       # 업로드 test