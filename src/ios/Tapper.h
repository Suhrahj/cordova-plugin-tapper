#import <AudioToolbox/AudioToolbox.h>
#import <Cordova/CDVPlugin.h>

@interface Tapper : CDVPlugin

- (void) Sound:(CDVInvokedUrlCommand*)command;

@end
