package com.oruhelp.tnelection;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "appoPreview";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Nullable
      @Override
      protected Bundle getLaunchOptions() {
        Bundle bundle =  MainActivity.this.getIntent().getExtras();
        Bundle newBundle = new Bundle();
        if (bundle != null && bundle.containsKey("configReducer")) {
          newBundle.putString("previewAppData", bundle.getString("configReducer"));
        }
        return newBundle;
      }
    };
  }
}
