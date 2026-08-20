package com.nissa.beoalsanzcropadvisory;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import androidx.core.splashscreen.SplashScreen;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private boolean keepSplashScreen = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // 1. Install Splash Screen before Capacitor initialises
        SplashScreen splashScreen = SplashScreen.installSplashScreen(this);

        super.onCreate(savedInstanceState);

        // 2. Keep the splash screen on screen while loading
        splashScreen.setKeepOnScreenCondition(() -> keepSplashScreen);

        // 3. Pause for 2000ms (2 seconds) to display your logo, then release
        new Handler(Looper.getMainLooper()).postDelayed(() -> {
            keepSplashScreen = false;
        }, 2000);
    }
}
