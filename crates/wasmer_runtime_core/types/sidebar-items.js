initSidebarItems({"constant":[["_IMPL_DESERIALIZE_FOR_ElementType",""],["_IMPL_DESERIALIZE_FOR_FuncIndex",""],["_IMPL_DESERIALIZE_FOR_FuncSig",""],["_IMPL_DESERIALIZE_FOR_GlobalDescriptor",""],["_IMPL_DESERIALIZE_FOR_GlobalIndex",""],["_IMPL_DESERIALIZE_FOR_GlobalInit",""],["_IMPL_DESERIALIZE_FOR_ImportedFuncIndex",""],["_IMPL_DESERIALIZE_FOR_ImportedGlobalIndex",""],["_IMPL_DESERIALIZE_FOR_ImportedMemoryIndex",""],["_IMPL_DESERIALIZE_FOR_ImportedTableIndex",""],["_IMPL_DESERIALIZE_FOR_Initializer",""],["_IMPL_DESERIALIZE_FOR_LocalFuncIndex",""],["_IMPL_DESERIALIZE_FOR_LocalGlobalIndex",""],["_IMPL_DESERIALIZE_FOR_LocalMemoryIndex",""],["_IMPL_DESERIALIZE_FOR_LocalTableIndex",""],["_IMPL_DESERIALIZE_FOR_MemoryDescriptor",""],["_IMPL_DESERIALIZE_FOR_MemoryIndex",""],["_IMPL_DESERIALIZE_FOR_SigIndex",""],["_IMPL_DESERIALIZE_FOR_TableDescriptor",""],["_IMPL_DESERIALIZE_FOR_TableIndex",""],["_IMPL_DESERIALIZE_FOR_Type",""],["_IMPL_DESERIALIZE_FOR_Value",""],["_IMPL_SERIALIZE_FOR_ElementType",""],["_IMPL_SERIALIZE_FOR_FuncIndex",""],["_IMPL_SERIALIZE_FOR_FuncSig",""],["_IMPL_SERIALIZE_FOR_GlobalDescriptor",""],["_IMPL_SERIALIZE_FOR_GlobalIndex",""],["_IMPL_SERIALIZE_FOR_GlobalInit",""],["_IMPL_SERIALIZE_FOR_ImportedFuncIndex",""],["_IMPL_SERIALIZE_FOR_ImportedGlobalIndex",""],["_IMPL_SERIALIZE_FOR_ImportedMemoryIndex",""],["_IMPL_SERIALIZE_FOR_ImportedTableIndex",""],["_IMPL_SERIALIZE_FOR_Initializer",""],["_IMPL_SERIALIZE_FOR_LocalFuncIndex",""],["_IMPL_SERIALIZE_FOR_LocalGlobalIndex",""],["_IMPL_SERIALIZE_FOR_LocalMemoryIndex",""],["_IMPL_SERIALIZE_FOR_LocalTableIndex",""],["_IMPL_SERIALIZE_FOR_MemoryDescriptor",""],["_IMPL_SERIALIZE_FOR_MemoryIndex",""],["_IMPL_SERIALIZE_FOR_SigIndex",""],["_IMPL_SERIALIZE_FOR_TableDescriptor",""],["_IMPL_SERIALIZE_FOR_TableIndex",""],["_IMPL_SERIALIZE_FOR_Type",""],["_IMPL_SERIALIZE_FOR_Value",""]],"enum":[["ElementType","Kinds of element types."],["ExternDescriptor","Information about an import such as its type and metadata."],["Initializer","A const value initializer. Over time, this will be able to represent more and more complex expressions."],["LocalOrImport","Kind of local or import type."],["Type","Represents a WebAssembly type."],["Value","Represents a WebAssembly value."]],"struct":[["ExportDescriptor","Type describing an export that the [`Module`] provides."],["FuncIndex","Typed Index"],["FuncSig","The signature of a function that is either implemented in a wasm module or exposed to wasm by the host."],["GlobalDescriptor","Describes the mutability and type of a Global"],["GlobalIndex","Typed Index"],["GlobalInit","A wasm global."],["ImportDescriptor","A type describing an import that a [`Module`] needs to be instantiated."],["ImportedFuncIndex","Typed Index"],["ImportedGlobalIndex","Typed Index"],["ImportedMemoryIndex","Typed Index"],["ImportedTableIndex","Typed Index"],["LocalFuncIndex","Typed Index"],["LocalGlobalIndex","Typed Index"],["LocalMemoryIndex","Typed Index"],["LocalTableIndex","Typed Index"],["MemoryDescriptor","A wasm memory descriptor."],["MemoryIndex","Typed Index"],["SigIndex","Index for signature."],["TableDescriptor","Describes the properties of a table including the element types, minimum and optional maximum, number of elements in the table."],["TableIndex","Typed Index"]],"trait":[["LocalImport","Trait that represents Local or Import."],["NativeWasmType","Represents a native wasm type."],["ValueType","Trait for a Value type. A Value type is a type that is always valid and may be safely copied."],["WasmExternType","A trait to represent a wasm extern type."]],"type":[["FuncDescriptor","Information about a function."]]});