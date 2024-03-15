function solution(array) {
  // 1. 배열을 오름차순으로 정렬
  array.sort((a, b) => a - b);

  let maxCount = 0; // 최대 빈도수를 저장할 변수 초기화
  let mostCount = -1; // 최빈값을 저장할 변수 초기화
  let currentCount = 0; // 현재 숫자의 빈도수를 저장할 변수 초기화

  // 2. 배열 데이터의 가장 낮은 순서부터 오른쪽으로 비교
  for (let i = 0; i < array.length; i++) {
    currentCount++;

    // 3. 오른쪽의 요소를 뺐을 때 0이 나오는 요소들을 카운트
      // array.length - 1 는 [1] 일 때 인데스 0을 출력하기 위해 넣어둔 조건식
    if (i === array.length - 1 || array[i] !== array[i + 1]) {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        mostCount = array[i];
      } else if (currentCount === maxCount) {
        mostCount = -1;
      }
      currentCount = 0;
    }
  }

  return mostCount; // 최빈값 반환
}

// function solution(array) {
//     // array의 최댓값만큼의 길이를 가진 새로운 배열 생성
//     let newArray = new Array(Math.max(...array)+1).fill(0);
//     // array 반복문을 통해, 해당 값에 해당하는 index의 값 += 1
//     for (let i = 0; i < array.length; i++) {
//         newArray[array[i]] += 1
//     }
//     // newArray의 최댓값에 해당 하는 index 출력
//     // 만약 indexOf와 lastIndexOf가 지칭하는 값이 같으면, -1 출력 (중복인 경우 확인)
//     if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
//         return -1
//     } else {
//         return newArray.indexOf(Math.max(...newArray));
//     };
// }


// function solution(array) {
//   let cnt = {};
//   let maxCnt = 0;
//   let result = 0;

//   // cnt[x] = (cnt[x] || 0) + 1;
//   array.forEach((x) => {
//     if (!cnt[x]) {
//       cnt[x] = 1;
//     } else {
//       cnt[x] += 1;
//     }
//   });

//   maxCnt = Math.max(...Object.values(cnt));
//   result = Object.keys(cnt).filter((x) => cnt[x] === maxCnt);
//   //cnt[x] === maxCnt 수정 코드
//   result = result.length === 1 ? parseInt(result) : -1;

//   return result;
// }