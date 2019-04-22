import * as fb from 'firebase'
class ad {
    constructor (title, description, ownerId, promo=false, imageSrc='',  id = null) {
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}
export default{
    state: {
        ads:[
            {
                title: 'First Ad', 
                description: 'Hello i am discription', 
                promo: false, 
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', 
                id: '123'
                },
              {
                title: 'Second Ad', 
                description: 'Hello i am discription', 
                promo: true, 
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
                id: '1234'
              },
      
              {
                title: 'Third Ad', 
                description: 'Hello i am discription', 
                promo: true, 
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', 
                id: '12345'
                }
        ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        async createAd ({commit, getters}, payload) {
            // payload.id = '32131'
            commit('clearError')
            commit('setLoading', true)

            try {

                const newAd = new ad(
                    payload.title, 
                    payload.description,
                    getters.user.id, 
                    payload.imageSrc, 
                    payload.promo,
                    )

               const fbValue = await fb.database().ref('ads').push(newAd)
                    console.log(fbValue)
            } catch (error) {
                commit('setError', error.messege)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}