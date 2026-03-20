import http from "@/util/http";

export const boardApi = {
    // 글리스트.
    // { params } : 쿼리스트링을 붙여서 GET 요청을 보낼 때 사용
    getBoardList(params = {}) {
        return http.get('/board', { params })
    },

    getBoardDetail(id, searchType, searchValue) {
        return http.get(`board/${id}`, {
            params: {
                schType: searchType,
                kwd: searchValue
            }
        })
    },

    getBoardForEdit(id) {
        return http.get(`/board/${id}/edit`)
    },

    createBoard(postData) {
        return http.post(`/board`, postData)
    },

    updateBoard(postData) {
        return http.put(`/board/${id}`, postData)
    },

    deleteBoard(id) {
        return http.get(`/board/${id}`)
    }
}