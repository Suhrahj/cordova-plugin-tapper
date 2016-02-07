#import "Tapper.h"

@implementation Tapper

- (void)Sound:(CDVInvokedUrlCommand*)command
{

                               
    AudioServicesPlaySystemSound(1104);

    NSString* callbackId = @"return";
    NSString* msg = @"return";

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self success:result callbackId:callbackId];
}

@end
