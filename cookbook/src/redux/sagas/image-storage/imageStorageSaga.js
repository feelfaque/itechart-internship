import types from "../../actions/image-storage/imageStorageActionTypes";
import {call, put, takeLatest} from 'redux-saga/effects';
import {imageUploadFail, imageUploadSuccess} from "../../actions/image-storage/imageStorageActions";
import cryptoRandomString from 'crypto-random-string';
import {firebaseStorage, authFirebase} from "../../../firebase/config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";

const generateImageName = () => {
    return cryptoRandomString({length: 7});
}

const uploadImage = async (image) => {
    const imageName = generateImageName();
    const currentUser = authFirebase.currentUser.uid;
    const uploadPath = `images/${currentUser}/${imageName}.${image.name.split('.').pop()}`;
    const storageRef = await ref(firebaseStorage, uploadPath);
    const img = await uploadBytes(storageRef, image);
    return getDownloadURL(img.ref);
}

export function* startImageUpload ({payload: image}) {
    try {
        const url = yield call(uploadImage, image);
        yield put(imageUploadSuccess(url));
    } catch (error) {
        yield put(imageUploadFail("Image's not uploaded"));
    }
}

export function* onImageUploadStart () {
    yield takeLatest(types.START_IMAGE_UPLOAD, startImageUpload)
}

export function* imageStorageSaga () {
    yield call(onImageUploadStart);
}

