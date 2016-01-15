#import "Tapper.h"

@implementation Tapper

- (void)Sound:(CDVInvokedUrlCommand*)command
{

NSString* callbackId = [command callbackId];
    NSString* name = [[command arguments] objectAtIndex:0];
    NSString* msg = [NSString stringWithFormat: @"Hello, %@", name];

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];
                               
    AudioServicesPlaySystemSound(1104);

    [self success:result callbackId:callbackId];
}

@end
