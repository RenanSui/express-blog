export const formatInput = (input: string) => input.replace(/[^a-zA-Z0-9]/g, '')

export const liveSearchOptions = (input: string) => ({
  $or: [
    { title: { $regex: new RegExp(formatInput(input), 'i') } },
    { body: { $regex: new RegExp(formatInput(input), 'i') } },
  ],
})
