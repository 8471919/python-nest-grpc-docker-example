# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: src/proto/model.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15src/proto/model.proto\x12\x05model\"\x19\n\nModelParam\x12\x0b\n\x03url\x18\x01 \x01(\t\"\x1c\n\x0bModelReturn\x12\r\n\x05label\x18\x01 \x01(\t2C\n\x0cModelService\x12\x33\n\x08getLabel\x12\x11.model.ModelParam\x1a\x12.model.ModelReturn\"\x00\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'src.proto.model_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _globals['_MODELPARAM']._serialized_start=32
  _globals['_MODELPARAM']._serialized_end=57
  _globals['_MODELRETURN']._serialized_start=59
  _globals['_MODELRETURN']._serialized_end=87
  _globals['_MODELSERVICE']._serialized_start=89
  _globals['_MODELSERVICE']._serialized_end=156
# @@protoc_insertion_point(module_scope)