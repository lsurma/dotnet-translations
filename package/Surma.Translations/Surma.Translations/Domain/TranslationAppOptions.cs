﻿namespace Surma.Translations.Domain;

public class TranslationAppOptions
{
    public string ConnectionString { get; set; } = String.Empty;
    
    public string TableName { get; set; } = "Translations";
}