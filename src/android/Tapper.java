package com.cordova.tapper.tapper;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.ContentResolver;
import android.content.Context;
import android.media.AudioManager;

import android.view.SoundEffectConstants;
import android.provider.Settings;
import android.view.View;

public class Tapper extends CordovaPlugin {
	AudioManager audioManager;
	View view;
	static final boolean CORDOVA_4 = Integer.valueOf(CordovaWebView.CORDOVA_VERSION.split("\\.")[0]) >= 4;
	
	
	@Override
	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    	audioManager = (AudioManager) cordova.getActivity().getSystemService(Context.AUDIO_SERVICE);
		
    	super.initialize(cordova, webView);
		
		if(CORDOVA_4) {
			try {
				view = (View) webView.getClass().getMethod("getView").invoke(webView);
			} catch(Exception e) {
				view = (View) webView;
			}
		} else
			view = (View) webView;
		
    	view.setSoundEffectsEnabled(false);
	}

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("Sound")) {
        	audioManager.playSoundEffect(SoundEffectConstants.CLICK);
        } else {
            return false;
        }
        return true;
    }
}
