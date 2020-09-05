import { createStore } from 'vuex'
import results from '@/store/results'

export default createStore({ 
  modules: {
    results: results    
  }
})