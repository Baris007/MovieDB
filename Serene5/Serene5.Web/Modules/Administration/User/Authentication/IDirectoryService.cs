﻿
namespace Serene5;

public interface IDirectoryService
{
    AppServices.DirectoryEntry Validate(string username, string password);
}