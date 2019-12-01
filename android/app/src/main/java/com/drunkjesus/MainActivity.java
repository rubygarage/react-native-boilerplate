package com.drunkjesus;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import androidx.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    private static final String DEEP_LINKING_KEY = "deepLinking";

    @Override
    public void onNewIntent(Intent intent) {
        if (intent.getData() != null) {
            Uri deepLinkURL = intent.getData();
            ReactContext reactContext = getReactNativeHost()
                    .getReactInstanceManager().getCurrentReactContext();
            sendEvent(reactContext, DEEP_LINKING_KEY, deepLinkURL.toString());
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "DrunkJesusMobile";
    }

    @SuppressWarnings("SameParameterValue")
    private void sendEvent(@Nullable ReactContext reactContext, String eventName, String str) {
        if (reactContext != null) {
            reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, str);
        }
    }
}
