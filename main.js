// DOMContentLoaded: HTML 문서가 모두 로드되었을 때 실행되도록 보장합니다.
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ID가 'test-button'인 HTML 요소를 찾습니다.
    const button = document.getElementById('test-button');

    // 2. 만약 버튼이 존재한다면 (오타 등으로 못 찾는 경우 방지)
    if (button) {
        // 3. 버튼에 'click' 이벤트 리스너(감지기)를 추가합니다.
        button.addEventListener('click', () => {
            
            // 4. 버튼이 클릭되면 이 코드가 실행됩니다.
            alert('🎉 버튼 클릭! JavaScript가 성공적으로 연결되었습니다.');
        
        });
    }

});
