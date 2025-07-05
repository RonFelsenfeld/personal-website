import {
  Experiment,
  ExperimentMetadata,
  ExperimentName,
  ExperimentsTexts,
} from '@/types/experiment.types'

export const mergeExperimentsTextsAndMetadata = (
  experimentsTexts: ExperimentsTexts,
  experimentsMetadata: Record<ExperimentName, ExperimentMetadata>
): Experiment[] => {
  const experimentNames = Object.values(ExperimentName)

  const fullExperiments = experimentNames.map(experimentName => {
    const experimentTexts = experimentsTexts[experimentName]
    const { id, ...restExperimentMetadata } =
      experimentsMetadata[experimentName]

    return {
      id,
      ...experimentTexts,
      metadata: restExperimentMetadata,
    }
  })

  return fullExperiments
}
