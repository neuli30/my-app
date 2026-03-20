import axios from 'axios';

// Axios 인스턴스 생성
/*
   - 
   - headers: { 'Content-Type': 'application/json' },
     => 서버로 전송하는 요청 Body의 형식(POST, PUT, DELETE)
     => GET 요청은 보통 Body가 없기 때문에 URL 쿼리스트링으로 전송
   - withCredentials: true
      => 서로 다른 도메인(Cross-Origin) 간에 쿠키나 인증 정보를 포함해서 보낼 것인지를 결정하는 옵션
*/
const http = axios.create({
    baseURL: 'http://localhost:9090', // Spring Boot 서버 주소
    timeout: 10000, // 10초 이상 응답 없으면 에러
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true // 쿠키 기반 인증 사용 시 필요 (CORS 설정 필요)
});

// 요청 인터셉터 (요청 전 공통 작업)
http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // JWT 토큰 추가 예시
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터 (응답 후 공통 에러 처리)
http.interceptors.response.use(
    (response) => response.data, // 데이터를 한 단계 미리 추출해서 전달
    (error) => {
        if (error.response && error.response.status === 401) {
            alert('세션이 만료되었습니다. 다시 로그인해주세요.');
        }
        return Promise.reject(error);
    }
);

export default http;