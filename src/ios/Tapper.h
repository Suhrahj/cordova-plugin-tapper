#import <AudioToolbox/AudioServices.h>
#import <Cordova/CDV.h>

@interface Tapper : CDVPlugin

- (void) Sound:(CDVInvokedUrlCommand*)command;

@end
