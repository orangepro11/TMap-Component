// Language: javascript
export default {
  // key已经被vue的diff算法所占有
  props: {
    mapKey: {
      type: String,
      required: true
    },
    width: {
      type: [String],
      required: true
    },
    height: {
      type: [String],
      required: true
    },
    latitude: {
      type: [Number,String],
      default: '41.81762080226399'
    },
    longitude: {
      type: [Number,String],
      default: '123.43794223267942'
    },
    zoom: {
      type: [Number,String],
      default: '12'
    },
    markers: {
      type: Array,
      default: () => ([])
    }
  }
}
