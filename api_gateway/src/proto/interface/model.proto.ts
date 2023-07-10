export interface ModelParam {
  url: string;
}

export interface ModelReturn {
  label: string;
}

export interface IModelService {
  getLabel(params: ModelParam): Promise<ModelReturn>;
}
