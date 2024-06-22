using AutoMapper;
using Contracts;
using MassTransit;
using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Consumers
{
    public class AuctionDeletedConsumer : IConsumer<AuctionDeleted>
    {
        public async Task Consume(ConsumeContext<AuctionDeleted> context)
        {
            Console.WriteLine("--> Consuming auction Deleted: "+context.Message.Id);
            
            // write code to delete it in mongo
            var result = await DB.DeleteAsync<Item>(context.Message.Id);
            if(!result.IsAcknowledged)
                throw new MessageException(typeof(AuctionUpdated), "Problem deleteing auction");

        }
    }
}