<script setup>
</script>

<template>
  <div class="detail-wrapper mt-4">
    <header class="mb-3 pb-3 border-bottom">
      <h4 class="fw-bold mb-3 post-title">제목 입니다.</h4>
      <div class="d-flex justify-content-between align-items-center text-muted small">
        <div>
          <span class="me-3"><strong>홍길동</strong></span>
          <span class="me-3">조회 1</span>
          <span>2026-01-01</span>
        </div>
      </div>
    </header>

    <article class="post-body mb-3">
      내용 입니다.
    </article>

    <section class="border-top border-bottom py-2 mb-3">
      <div class="nav-item py-1">
        <span class="nav-label">이전글</span>
        <a href="#"  class="nav-link-text">
          
        </a>
      </div>
      <div v-if="nextPost" class="nav-item py-1">
        <span class="nav-label">다음글</span>
        <a href="#"  class="nav-link-text">

        </a>
      </div>
    </section>

    <footer class="d-flex justify-content-between align-items-center">
      <button class="btn btn-outline-secondary rounded-0 px-4" >
        목록
      </button>
      
      <div class="btn-group-sm">
        <button class="btn btn-outline-dark rounded-0 me-2 px-4" >수정</button>
        <button class="btn btn-outline-danger rounded-0 px-4" >삭제</button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.detail-wrapper {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Pretendard', sans-serif;
}

.post-title {
  background-color: #f8f9fa;
  padding: 12px 16px;
  border-left: 5px solid #edeff1;
  border-radius: 3px;
}

.post-body {
  line-height: 1.8;
  color: #333;
  font-size: 1.1rem;
  white-space: pre-wrap;
  min-height: 200px;
}

.nav-item {
  display: flex;
  font-size: 0.95rem;
}

.nav-label {
  width: 60px;
  color: #999;
  flex-shrink: 0;
}

.nav-link-text {
  color: #444;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-link-text:hover {
  text-decoration: underline;
  color: #000;
}

/* 버튼 스타일 커스텀 */
.btn-outline-dark, .btn-outline-danger {
  border-radius: 4px;
  padding: 0.4rem 1rem;
}
</style>