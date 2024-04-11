def solution(progresses, speeds):
    answer = []
    
    while progresses:
        cnt = 0
        while progresses and progresses[0] >= 100: # progresses가 빈 배열인지 확인 후 0번 인덱스가 100이상이면 while 루프
            cnt += 1
            progresses.pop(0)
            speeds.pop(0)
            # 그래서 빈 배열이 아니고 0번 인덱스가 100 이상 아닐 때까지 cnt += 1
        
        progresses = [progresses[i] + speeds[i] for i in range(len(progresses))]
        # 여기서 progresses 값을 100까지 맞춰줍니다.
        # 이때 93, 30, 55 일 때 93이 100이될라면 7일 소요 그래서 100, 210, 90 이 상태로 위의 while문으로 접근
        
        if cnt:
            answer.append(cnt)
        # if 0이 아닐 때 cnt값을 answer에 push
    
    return answer
