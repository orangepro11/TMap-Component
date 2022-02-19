/**
 * 动态创建script标签
 * @param {*} key 天地图API的key
 */
 export function createScriptElement(key) {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `http://api.tianditu.gov.cn/api?v=4.0&tk=${key}`;
  document.getElementsByTagName('head')[0].appendChild(script);
}

/**
 * 简单的uuid算法
 * @returns uuid字符串
 */
export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 获取用户当前地理位置信息
 * @returns 位置对象
 */
export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      resolve({
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    }, (res) => {
      reject('用户未开启地理位置授权')
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  });
}

export function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

export function getPx(unit) {
  if (typeof unit === 'number') {
    return unit + 'px';
  } else {
    return unit;
  }
} 