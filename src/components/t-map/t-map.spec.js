import { mount } from '@vue/test-utils';
import TMap from './t-map.vue';

describe('TMap', () => {
  const MapKey = "0dc07d038e7ee6518532101750a96c5a";
  const width = "100%";
  const height = "100vh";
  const wrapper = mount(TMap, {
    props: {
      mapKey: MapKey,
      width: width,
      height: height
    }
  });
  it('在windows上应当存在天地图相关对象', () => {
    // 300毫秒后，开始断言属性
    setTimeout(() => {
      expect(window.T).toBeTruthy();
      expect(window.T.map).toBeTruthy();
      expect(window.T.map.getMap(MapKey)).toBeTruthy();
      // wrapper.destroy();
    }, 300);
  })

  it('组件里应当有latitude和longitude的默认值', () => {
    expect(wrapper.vm.latitude).toBe('44.81762080226399');
    expect(wrapper.vm.longitude).toBe('125.43794223267942');
    setTimeout(() => {
      expect(window.T.map.getMap(MapKey).getCenter()).toEqual({ lng: 125.43794223267942, lat: 44.81762080226399 });
    }, 300);
  })

  it('id=tdt-map的div应当存在', () => {
    expect(wrapper.find('#tdt-map').exists()).toBe(true);
  })

  it('id=tdt-map的div应当为高100vh', () => {
    expect(wrapper.find('#tdt-map').element.style.height).toBe('100vh');
  })

  it('地图的默认缩放等级应为12', () => {
    setTimeout(() => {
      expect(window.T.map.getMap(MapKey).getZoom()).toBe(12);
    }, 300);
  })

  it('组件中应当存在markers属性', () => {
    expect(wrapper.vm.markers).toEqual([]);
  })
})
