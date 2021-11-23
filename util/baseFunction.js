export function getStorage(key){
	try {
	    const value = uni.getStorageSync(key);
	    if (value) {
	        return value
	    }
	} catch (e) {
		console.log(e);
	}
}

export function setStorage(key,data){
	try {
	    uni.setStorageSync(key, data);
	} catch (e) {
	    console.log(e);
	}
}