def solution(seoul):
    
    # value_to_find = 'Kim'
    # index = seoul.index(value_to_find)
    # return f"김서방은 {index}에 있다"
    
    value_to_find = 'Kim'
    
    try:
        index = seoul.index(value_to_find)
        return f"김서방은 {index}에 있다"
    except ValueError:
        return f"김서방은 없습니다"
    