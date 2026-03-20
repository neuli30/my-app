<script setup>
</script>

<template>
  <div class="list-wrapper mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div class="d-flex align-items-center gap-2">
        <select
          class="form-select form-select-sm rounded-0 border-secondary-subtle"
          style="width: 100px;">
          <option value="all">전체</option>
          <option value="name">작성자</option>
          <option value="subject">제목</option>
          <option value="content">내용</option>
        </select>
        
        <input
          class="form-control form-control-sm rounded-0 border-secondary-subtle"
          style="width: 220px;" placeholder="검색어 입력"
        >
        
        <div class="d-flex align-items-center gap-1">
          <button class="btn btn-outline-dark btn-sm rounded-0 px-3">검색</button>
          <button class="btn btn-link btn-sm text-secondary text-decoration-none px-2">
            초기화
          </button>
        </div>
      </div>

      <button @click="$emit('create')" 
        class="btn btn-outline-primary btn-sm rounded-0 px-4">
        새 글 쓰기
      </button>
    </div>

    <div class="table-responsive">
      <table class="table table-hover align-middle custom-table">
        <thead>
          <tr>
            <th width="70">번호</th>
            <th>제목</th>
            <th width="120">작성자</th>
            <th width="120">등록일</th>
            <th width="70">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr class="cursor-pointer">
            <td class="text-center text-muted small">1</td>
            <td class="post-subject">
              <span class="text-dark">제목 입니다.</span>
            </td>
            <td class="text-center small">홍길동</td>
            <td class="text-center text-muted small">2026-01-01</td>
            <td class="text-center text-muted small">1</td>
          </tr>
          <tr>
            <td colspan="5" class="text-center py-5 text-muted small">검색 결과가 없습니다.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav class="mt-4">
      <ul class="pagination pagination-sm justify-content-center">
        <li class="page-item">
          <a class="page-link rounded-0 border-secondary-subtle me-1" 
             href="#" >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li>
          <a class="page-link rounded-0 border-secondary-subtle me-1"
             href="#">
            1
          </a>
        </li>

        <li class="page-item">
          <a class="page-link rounded-0 border-secondary-subtle mx-0" 
             href="#">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<style scoped>
.list-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

/* 테이블 */
.custom-table {
  border-top: 1.5px solid #222;
}
.custom-table thead th {
  background-color: #fcfcfc;
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: #777;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.custom-table tbody td {
  padding: 12px 10px;
  border-bottom: 1px solid #eee;
  font-size: 0.95rem;
}

.cursor-pointer {
  cursor: pointer;
}

/* 제목 호버 */
.post-subject:hover span {
  text-decoration: underline;
}

/* 페이징 */
.page-link {
  color: #333;
  min-width: 32px;
  text-align: center;
}
.page-item.active .page-link {
  background-color: #333 !important;
  border-color: #333 !important;
  color: #fff !important;
}
.page-item.disabled .page-link {
  color: #ccc;
  pointer-events: none;
  background-color: #f9f9f9;
}

/* 포커스 시 테두리 강조 */
.form-control:focus, .form-select:focus {
  box-shadow: none;
  border-color: #333;
}
</style>