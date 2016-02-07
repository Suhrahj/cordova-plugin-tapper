#import "Tapper.h"

@implementation Tapper

- (void)Sound:(CDVInvokedUrlCommand*)command
{

                               
    AudioServicesPlaySystemSound(1104);

    NSString* callbackId = [command callbackId];
    NSString* msg = @"return";

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    //[self success:result callbackId:callbackId];
}

@end
