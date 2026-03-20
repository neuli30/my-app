<script setup>
import { onMounted, ref } from 'vue'
import { boardApi } from '@/util/api/boardApi'

const props = defineProps({
    postId: Number
})

const emit = defineEmits(['list'])
const form = ref({
    subject: '',
    name:'',
    const:'',
    pwd:''
})

const isEdit = props.postId ? true : false

onMounted( async () => {

})

const savePost = async () => {
    
    try{
        if(isEdit) {
            await boardApi.updateBoard(props.postId, form.value)
            alert('수정되었습니다')
        } else {
            await boardApi.createBoard(form.value)
        }

        emit('list')
    } catch(e) {
        console.log(e)
        alert('저장 중 에러가 발생했습니다.')
    }
}

</script>

<template>
  <div class="form-wrapper mt-4">
    <header class="mb-4 pb-2 border-bottom">
      <h4 class="fw-bold">{{ isEdit ? '게시글 수정' : '게시글 작성'}}</h4>
    </header>

    <div class="form-container">
      <div class="mb-4">
        <label class="form-label small fw-bold text-secondary">제목</label>
        <input 
          type="text"
          v-model="form.subject"
          class="form-control rounded-0 border-secondary-subtle py-2" 
          placeholder="제목을 입력하세요"
        >
      </div>

      <div class="row mb-4">
        <div class="col-md-6">
          <label class="form-label small fw-bold text-secondary">작성자</label>
          <input 
            type="text" 
            v-model="form.name"
            :disabled="isEdit"
            class="form-control rounded-0 border-secondary-subtle py-2" 
            placeholder="이름 입력"
          >
        </div>
        <div class="col-md-6">
          <label class="form-label small fw-bold text-secondary">비밀번호</label>
          <input 
            type="password" 
            v-model="form.pwd"
            class="form-control rounded-0 border-secondary-subtle py-2" 
            placeholder="비밀번호 입력"
          >
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label small fw-bold text-secondary">내용</label>
        <textarea
        v-model="form.content"
          class="form-control rounded-0 border-secondary-subtle"
          rows="10"
          placeholder="내용을 입력하세요"
          style="resize: none;"
        ></textarea>
      </div>

      <div class="d-flex justify-content-end pt-3 border-top">
        <button @click="emit('list')" 
          class="btn btn-outline-secondary rounded-0 px-4 me-2">
          취소
        </button>
        <button @click="savePost" 
            class="btn btn-dark rounded-0 px-5" >
          ${{ isEdit ? '수정 완료' : '등록 하기'}}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

/* 입력 필드 포커스 스타일 */
.form-control:focus {
  box-shadow: none;
  border-color: #000;
  background-color: #fcfcfc;
}

/* 라벨 스타일 */
.form-label {
  letter-spacing: -0.5px;
  margin-bottom: 0.5rem;
}

/* 버튼 */
.btn-dark:hover {
  background-color: #333;
}
</style>